import type { Point, PointLike } from './Point'

export interface CircleLike {
  center: PointLike
  radius: number
}

export class Circle implements CircleLike {
  constructor(
    public center: Point,
    public radius: number,
  ) { }
}
