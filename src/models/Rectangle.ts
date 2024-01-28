import { equals } from '../utils'
import type { Point } from './Point'
import { isPointLike } from './Point'
import type { Segment } from './Segment'

export interface RectangleLike {
  x: number
  y: number
  width: number
  height: number
}

export class Rectangle implements RectangleLike {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
  ) { }

  public includes(shape: Point | Segment) {
    if (isPointLike(shape)) {
      if (equals(shape.x, this.x) && equals(shape.y, this.y)) {
        return true
      }
    }
  }
}
