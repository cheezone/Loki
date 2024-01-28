import { equals } from '../utils'

export interface PointLike {
  x: number
  y: number
}

export class Point implements PointLike {
  constructor(
    public x: number,
    public y: number,
  ) { }

  public equals(point: PointLike) {
    return equals(point.x, this.x) && equals(point.y, this.y)
  }
}

export function isPointLike(shape: object): shape is PointLike {
  return 'x' in shape && 'y' in shape
}
