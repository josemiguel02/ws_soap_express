const myService = {
  CalculatorService: {
    CalculatorPort: {
      Sumar: function (args: any) {

        console.log({ args });

        const num1 = parseFloat(args.num1);
        const num2 = parseFloat(args.num2);

        if (isNaN(num1) || isNaN(num2)) {
          throw new Error(
            'Los argumentos num1 y num2 deben ser números válidos.'
          );
        }

        const resultado = num1 + num2;

        return {
          resultado,
        };
      },
    },
  },
};

export default myService;
