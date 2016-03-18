import { expect } from 'chai'
import { sum } from '../src/actionCreators'

describe('sum', () => {
  it('should also add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).to.equal(3);
  })
})
