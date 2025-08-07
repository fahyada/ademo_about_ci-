import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

describe('useCounter', () => {
  it('should initialize count to 0 and val to 1', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('should increment count by val', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(3);
    });

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(3);
  });

  it('should allow updating val', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(5);
    });

    expect(result.current.val).toBe(5);
  });

  it('should accumulate increments', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
      result.current.increment();
    });

    expect(result.current.count).toBe(2); // Default val is 1
  });
});
