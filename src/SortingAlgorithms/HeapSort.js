import React from "react"
export default function GetHeapSortAnimations(input)
{
    const animations = []; 
        
        var array_length = input.length;
        
        for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
            heap_root(input, i);
          }
    
        for (i = input.length - 1; i > 0; i--) {
            swap(input, 0, i);
            array_length--;
            heap_root(input, 0);
        }
        function heap_root(input, i) {
            var left = 2 * i + 1;
            var right = 2 * i + 2;
            var max = i;
        
            if (left < array_length && input[left] > input[max]) {
                animations.push([left, max]);
                animations.push([left, max]);
                max = left;
            }
        
            if (right < array_length && input[right] > input[max])     {
                animations.push([right, max]);
                animations.push([right, max]);
                max = right;
            }
        
            if (max !== i) {
                swap(input, i, max);
                heap_root(input, max);
            }
        }
        
        function swap(input, index_A, index_B) {
            animations.push([index_A, input[index_A]]);
            animations.push([index_B, input[index_B]]);
            var temp = input[index_A];
            input[index_A] = input[index_B];
            input[index_B] = temp;
        }
    return animations;
}
    