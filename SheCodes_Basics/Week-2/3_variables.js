let who ="I am from"
undefined
who
'I am from'
let where="The chalk"
undefined
where
'The chalk'
who+" "+where
'I am from The chalk'
let country="Lancre"
undefined
country
'Lancre'
let sentence=who+" "+where+" "+country;
undefined
sentence
'I am from The chalk Lancre'
// sentence=who+" "+where+" "+"in "country;
// VM879:1 Uncaught SyntaxError: Unexpected identifier 'country'
sentence=who+" "+where+" "+"in "+country;
'I am from The chalk in Lancre'
sentence
'I am from The chalk in Lancre'
sentence=who+" "+where+", "+"in "+country;
'I am from The chalk, in Lancre'
sentence
'I am from The chalk, in Lancre'