type EventName =
  | 'cta_click'
  | 'form_submit'
  | 'portfolio_view'
  | 'xr_demo_launch'
  | 'showreel_play'
  | 'download_click'
  | 'page_view'
  | 'newsletter_signup'

interface TrackEventOptions {
  properties?: Record<string, string | number | boolean>
  userId?: string
}

export function trackEvent(name: EventName, options: TrackEventOptions = {}) {
  const event = {
    name,
    timestamp: new Date().toISOString(),
    ...options.properties,
    userId: options.userId,
  }

  if (typeof window !== 'undefined') {
    console.log('[Analytics]', event)
  }
}

export function trackPageView(page: string, title?: string) {
  trackEvent('page_view', { properties: { page, title: title || page } })
}

export function trackCTAClick(label: string, location: string) {
  trackEvent('cta_click', { properties: { label, location } })
}

export function trackFormSubmit(formType: string, success: boolean) {
  trackEvent('form_submit', { properties: { formType, success: String(success) } })
}

export function trackPortfolioView(projectId: string, projectName: string) {
  trackEvent('portfolio_view', { properties: { projectId, projectName } })
}

export function trackXRDemoLaunch(projectId: string) {
  trackEvent('xr_demo_launch', { properties: { projectId } })
}
