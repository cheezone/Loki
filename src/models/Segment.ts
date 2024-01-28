import { equals } from '../utils'
import { type Point, type PointLike, isPointLike } from './Point'

export interface SegmentLike {
  start: PointLike
  end: PointLike
}

export class Segment implements SegmentLike {
  constructor(
    public start: Point,
    public end: Point,
  ) { }

  public includes(shape: Point | Segment) {
    if (isPointLike(shape)) {
      if (this.start.equals(shape)) {
        return true
      }
      if (this.end.equals(shape)) {
        return true
      }
    }
  }
}
