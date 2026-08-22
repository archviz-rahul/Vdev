declare module 'marzipano' {
  class Viewer {
    constructor(element: HTMLElement, options?: any)
    createScene(options: any): Scene
    createView(options: any): View
    destroy(): void
  }

  class Scene {
    switchTo(): void
  }

  class View {}

  class EquirectangularGeometry {
    constructor(levels: any[])
  }

  class ImageUrlSource {
    static fromString(url: string): any
  }
}
