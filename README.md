
# TARJETA DE CRÉDITO VÁLIDA

Se solicita al usuario por medio de un "prompt" los números de su tarjeta, para que por medio del algoritmo de Luhm se realiza el siguiente procedimiento para poder detectar si la numeración de la tarjeta ingresada es válida.

Con la numeración de tarjeta ingresada y por medio de un "FOR" se buscar recorrer los dígitos ingresados y por el método "POP" y "SPLICE" invertir el orden de los dígitos.

Una vez obtenido el nuevo array se procede a detectar las posiciones pares y multiplicarlas por 2. Con éste resultado de ser el caso que se presenten números de 2 dígitos proceder a sumarlos entre ellos.

Una vez sumado todos los dígitos de las posiciones pares e impares se procede a comprobar por medio de módulo "%" que el resultado sea CERO , de no ser éste el resultado estaríamos ante un número de tarjeta inválido.
