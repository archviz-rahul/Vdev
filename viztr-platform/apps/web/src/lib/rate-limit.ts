const requests = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(
  key: string,
  options: { windowMs?: number; maxRequests?: number } = {}
): { allowed: boolean; remaining: number } {
  const { windowMs = 60000, maxRequests = 60 } = options
  const now = Date.now()
  const record = requests.get(key)

  if (!record || now > record.resetTime) {
    requests.set(key, { count: 1, resetTime: now + windowMs })
    return { allowed: true, remaining: maxRequests - 1 }
  }

  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0 }
  }

  record.count++
  return { allowed: true, remaining: maxRequests - record.count }
}
