class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        
        // Aqui solo se guarda elementos que tengan el potencial de seguir creciendo.
        // Es decir, height[i + 1] > height[i] o, bien dicho, heights[stack[k + 1]] >= heights[stack[k]]
        const stack: number[] = [];

        let max = 0;

        for (let i = 0; i <= heights.length; i++) {

            // Si es el ultimo elemento + 1, inventamos barra ficticia. con el 0, calculamos el area de todo el stack
            const current = i === heights.length ? 0 : heights[i];

            // Mientras:
            //              el stack no este vacio
            //              la altura actual sea menor que la ultima guardada

            // Para limpiar el stack, calculamos el area de los posibles rectangulos
            // y guardamos el max entre el max anterior y el nuevo calculo

            while (stack.length > 0 && current < heights[stack[stack.length - 1]]) {

                
                const height = heights[stack.pop()!];

                const left = stack.length > 0 ? stack[stack.length - 1] : -1;

                const firstBar = left + 1;
                const lastBar = i - 1;
                const width = lastBar - firstBar + 1;
                max = Math.max(max, height * width);

            }

            stack.push(i);
        }

        return max;
    }

}
