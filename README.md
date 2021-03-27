# The Lector Experience
![npm-size](https://img.shields.io/npm/v/lectorjs?style=flat-square)
![npm-size](https://img.shields.io/npm/l/lectorjs?style=flat-square)
![npm-size](https://img.shields.io/github/commit-activity/m/robo-monk/lector?style=flat-square)
![npm-size](https://img.shields.io/npm/dw/lectorjs?style=flat-square)

### [ 🚀 Demo ](https://robo-monk.github.io/lector)

Hi


## First time:

```bash
git clone git@github.com:robo-monk/lector.git
cd freeform
yarn install
```
* Python 3 required (prefferably installed with `brew`)
* virtualenv (`pip install virtualenv`)

## Run this to compile the code when you make changes:

Depends on your package manager (my recommendation would be `yarn`)

```bash
source setup yarn
```

```bash
source setup npm
```

# Install

### Use npm or yarn:
```bash
yarn install freeform
```

## Set up

Blah

```javascript 

freeform.injectStyles()

const end = `
<div class='end-message'>
    <h1> Thanks for participating </h1>
</div>
`

freeform.createForm(
    ["@Persona What are you going to use Fready for?", 
        "$work Work", 
        "$bigbrain My own thing", 
        ["$university University", [
            '@UniDiscipline What discipline?',
            '$social Social Sciences',
            "$stem STEM",
            '$money Economics',
            '$law Law',
            '$art Art',
            '$other Other'
        ]]
    ], 
    ["@Problem What are you seeking to improve?", 
    "$focus Focus", 
    "$time Time", 
    "$comprehension Comprehension",
    "$mountain I don't know"
 ]).on('done', function(results) {
     this.html(end)
     console.log('DONEE', results)
    })




```