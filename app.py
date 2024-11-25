from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'your_secret_key'  

@app.route('/')
def inicio():
    return render_template('inicio.html')  

@app.route('/index')
def index():
    return render_template('index.html')  

@app.route('/IniciarSesion')
def iniciarsesion():
    return render_template('IniciarSesion.html')  

@app.route('/Carrito')
def carrito():
    return render_template('carrito.html')  

@app.route('/login', methods=['POST'])
def login():
    usuario = request.form.get('usuario')
    contrasena = request.form.get('contrasena')

    if usuario == "admin" and contrasena == "1234":  
        return redirect(url_for('index')) 
    else:
        flash("Usuario o contraseña incorrectos.", "error")
        return redirect(url_for('iniciarsesion')) 
    
@app.route('/saldo')
def saldo():
    return render_template('saldo.html')


@app.route('/Form1')
def form1():
    return render_template('Form1.html') 

@app.route('/HistorialCompras')
def EstadoCuenta():
    return render_template('EstadoCuenta.html') 

@app.route('/aumento')
def aumento():
    return render_template('aumento.html') 

@app.route('/HistorialCompras')
def historial_compras():
    compras = [
        {'nombre': 'Producto 1', 'cantidad': 2, 'precio': 150.00, 'fecha': '2024-11-01'},
        {'nombre': 'Producto 2', 'cantidad': 1, 'precio': 300.00, 'fecha': '2024-11-10'},
        {'nombre': 'Producto 3', 'cantidad': 3, 'precio': 75.00, 'fecha': '2024-11-15'},
    ]
    return render_template('historial.html', compras=compras)

if __name__ == "__main__":
    app.run(debug=True)
