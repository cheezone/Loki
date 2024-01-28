import { equals } from '../utils'

export interface VectorLike {
  x: number
  y: number
  z: number
}

export class Vector implements VectorLike {
  static add(v1: VectorLike, v2: VectorLike, target = new Vector()): Vector {
    target.x = v1.x + v2.x
    target.y = v1.y + v2.y
    target.z = v1.z + v2.z
    return target
  }

  constructor(
    public x = 0,
    public y = 0,
    public z = 0,
  ) { }

  public add(data: VectorLike) {
    return Vector.add(this, data, this)
  }

  public equals(other: VectorLike) {
    const { x = 0, y = 0, z = 0 } = other
    return equals(x, this.x) && equals(y, this.y) && equals(z, this.z)
  }
}

export function isVectorLike(shape: object): shape is VectorLike {
  return 'x' in shape && 'y' in shape
}

export function isVector(shape: object): shape is Vector {
  return shape instanceof Vector
}
