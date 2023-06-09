express = require('express');
path = require('path');

const app =  express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    const age = req.body.age;
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    bmi = (weight / (height/100 * height/100)).toFixed(1);;

    res.render('index', { age, weight, height, result: `Your BMI result is: ${bmi}` });
});

app.listen(port, () =>{
    console.log('express running on port '+ port)
});