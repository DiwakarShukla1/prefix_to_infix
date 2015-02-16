# Prefix To Infix

Written in JavaScript

Scope :-  prefix value can be like : +ab
          numbers not supported  like : 0-9.

if input value is wrong "WRONG INPUT" message is returned.
if input expression is wrong  "WRONG EXPRESSION" is returned.
other wise infix of input is returned.

Test

1.  input  :-- *+a-bc/-de+-fgh
  output :-- (a+b-c)*((d-e)/(f-g+h))

2. input  :-- *+a-bc/-de+-fghi
   output :-- WRONG EXPRESSION

3. input  :-- *+a-bc/-de+-fghi1
   output :-- WRONG INPUT
              PLEASE GIVE INPUT FORMAT LIKE : *+a-bc/-de+-fgh
