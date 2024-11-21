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

    if usuario == "admin" and contrasena == "1234":  # Cambia esto según tus credenciales
        return redirect(url_for('index'))  # Redirige a index.html si las credenciales son correctas
    else:
        flash("Usuario o contraseña incorrectos.", "error")
        return redirect(url_for('iniciarsesion'))  # Redirige de nuevo a IniciarSesion.html
@app.route('/saldo.html')
def saldo():
    return render_template('saldo.html')


@app.route('/Form1')
def form1():
    return render_template('Form1.html') 

if __name__ == "__main__":
    app.run(debug=True)
