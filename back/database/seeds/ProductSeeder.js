'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Product = use('App/Models/Product');
const Factory = use('Factory')

class ProductSeeder {
  async run() {
    await Product.create({ name: 'Haney, Laurel E.', price: '1000', stock: '15' });
    await Product.create({ name: 'Clements, Ruby I.', price: '1000', stock: '28' });
    await Product.create({ name: 'Hewitt, Dean E.', price: '1000', stock: '43' });
    await Product.create({ name: 'Vaughn, Oscar I.', price: '1000', stock: '9' });
    await Product.create({ name: 'Higgins, Kennan D.', price: '1000', stock: '70' });
    await Product.create({ name: 'Cummings, Rama T.', price: '1000', stock: '32' });
    await Product.create({ name: 'Finley, Jameson J.', price: '1000', stock: '32' });
    await Product.create({ name: 'Pitts, Chaney S.', price: '1000', stock: '82' });
    await Product.create({ name: 'Hunt, Kennan U.', price: '1000', stock: '48' });
    await Product.create({ name: 'Mckinney, Ava B.', price: '1000', stock: '71' });
    await Product.create({ name: 'Harper, Tatum H.', price: '1000', stock: '93' });
    await Product.create({ name: 'Barton, Thor R.', price: '1000', stock: '31' });
    await Product.create({ name: 'Schultz, Ruby E.', price: '1000', stock: '11' });
    await Product.create({ name: 'Alford, Doris G.', price: '1000', stock: '48' });
    await Product.create({ name: 'Norton, Rafael T.', price: '1000', stock: '72' });
    await Product.create({ name: 'Merritt, Gavin J.', price: '1000', stock: '42' });
    await Product.create({ name: 'Forbes, Burke S.', price: '1000', stock: '85' });
    await Product.create({ name: 'Chapman, Kenneth H.', price: '1000', stock: '63' });
    await Product.create({ name: 'Burks, Sigourney H.', price: '1000', stock: '56' });
    await Product.create({ name: 'Fuentes, Madison K.', price: '1000', stock: '77' });
    await Product.create({ name: 'Bradshaw, Zachery A.', price: '1000', stock: '8' });
    await Product.create({ name: 'Lott, Tanya Y.', price: '1000', stock: '41' });
    await Product.create({ name: 'Wise, Stewart F.', price: '1000', stock: '97' });
    await Product.create({ name: 'Fox, Doris O.', price: '1000', stock: '10' });
    await Product.create({ name: 'Vargas, Orlando A.', price: '1000', stock: '100' });
    await Product.create({ name: 'Boyd, Vance L.', price: '1000', stock: '86' });
    await Product.create({ name: 'Gamble, Uta V.', price: '1000', stock: '77' });
    await Product.create({ name: 'Diaz, Idona N.', price: '1000', stock: '77' });
    await Product.create({ name: 'Mays, Melyssa A.', price: '1000', stock: '95' });
    await Product.create({ name: 'Jordan, Brent R.', price: '1000', stock: '18' });
    await Product.create({ name: 'Christensen, Tallulah B.', price: '1000', stock: '50' });
    await Product.create({ name: 'Hamilton, Kai W.', price: '1000', stock: '51' });
    await Product.create({ name: 'Schwartz, Kaden K.', price: '1000', stock: '97' });
    await Product.create({ name: 'Anderson, Shay X.', price: '1000', stock: '46' });
    await Product.create({ name: 'Sampson, Phelan P.', price: '1000', stock: '67' });
    await Product.create({ name: 'Turner, Alexandra P.', price: '1000', stock: '45' });
    await Product.create({ name: 'Cunningham, Ira R.', price: '1000', stock: '5' });
    await Product.create({ name: 'Nichols, Lucas U.', price: '1000', stock: '1' });
    await Product.create({ name: 'Middleton, Brenda U.', price: '1000', stock: '30' });
    await Product.create({ name: 'Townsend, Lenore E.', price: '1000', stock: '55' });
    await Product.create({ name: 'Mcgee, Vaughan F.', price: '1000', stock: '87' });
    await Product.create({ name: 'Tyson, Ali X.', price: '1000', stock: '19' });
    await Product.create({ name: 'Cummings, Raven G.', price: '1000', stock: '7' });
    await Product.create({ name: 'Rivers, Hedda W.', price: '1000', stock: '30' });
    await Product.create({ name: 'Hull, Scarlet F.', price: '1000', stock: '30' });
    await Product.create({ name: 'Hull, Nadine C.', price: '1000', stock: '96' });
    await Product.create({ name: 'Carr, Reece Y.', price: '1000', stock: '15' });
    await Product.create({ name: 'Johns, Ciaran F.', price: '1000', stock: '88' });
    await Product.create({ name: 'Dudley, Haley L.', price: '1000', stock: '56' });
    await Product.create({ name: 'Soto, Cameron K.', price: '1000', stock: '36' });
    await Product.create({ name: 'Mercado, Bevis V.', price: '1000', stock: '15' });
    await Product.create({ name: 'Huff, Shoshana U.', price: '1000', stock: '82' });
    await Product.create({ name: 'Guerra, Neve K.', price: '1000', stock: '66' });
    await Product.create({ name: 'Keith, Chelsea F.', price: '1000', stock: '26' });
    await Product.create({ name: 'Neal, Autumn Q.', price: '1000', stock: '45' });
    await Product.create({ name: 'Zimmerman, Jamalia T.', price: '1000', stock: '50' });
    await Product.create({ name: 'Hinton, Catherine L.', price: '1000', stock: '46' });
    await Product.create({ name: 'Petty, Seth F.', price: '1000', stock: '29' });
    await Product.create({ name: 'Mack, Amanda N.', price: '1000', stock: '38' });
    await Product.create({ name: 'Melendez, Dolan V.', price: '1000', stock: '89' });
    await Product.create({ name: 'Anthony, Clinton U.', price: '1000', stock: '89' });
    await Product.create({ name: 'Booker, Amela I.', price: '1000', stock: '44' });
    await Product.create({ name: 'Lester, Bethany H.', price: '1000', stock: '19' });
    await Product.create({ name: 'Maxwell, Benjamin W.', price: '1000', stock: '98' });
    await Product.create({ name: 'Clay, Palmer W.', price: '1000', stock: '83' });
    await Product.create({ name: 'Roth, Nash P.', price: '1000', stock: '44' });
    await Product.create({ name: 'Carrillo, Teegan M.', price: '1000', stock: '43' });
    await Product.create({ name: 'Mckinney, Nolan W.', price: '1000', stock: '47' });
    await Product.create({ name: 'Rosa, Summer D.', price: '1000', stock: '65' });
    await Product.create({ name: 'Hardin, Cameran C.', price: '1000', stock: '20' });
    await Product.create({ name: 'Stanton, Ifeoma Y.', price: '1000', stock: '9' });
    await Product.create({ name: 'Duffy, Wing O.', price: '1000', stock: '89' });
    await Product.create({ name: 'Yates, Gisela K.', price: '1000', stock: '37' });
    await Product.create({ name: 'Hale, Alec Z.', price: '1000', stock: '45' });
    await Product.create({ name: 'Potts, Mallory U.', price: '1000', stock: '37' });
    await Product.create({ name: 'Spears, Lester W.', price: '1000', stock: '82' });
    await Product.create({ name: 'Underwood, Emerald H.', price: '1000', stock: '6' });
    await Product.create({ name: 'Hatfield, Malcolm B.', price: '1000', stock: '1' });
    await Product.create({ name: 'Norman, Risa L.', price: '1000', stock: '52' });
    await Product.create({ name: 'Sweeney, Zelenia J.', price: '1000', stock: '36' });
    await Product.create({ name: 'Pugh, Brian K.', price: '1000', stock: '61' });
    await Product.create({ name: 'Love, Alfreda E.', price: '1000', stock: '23' });
    await Product.create({ name: 'Hall, Drake S.', price: '1000', stock: '4' });
    await Product.create({ name: 'Valentine, Jaime D.', price: '1000', stock: '14' });
    await Product.create({ name: 'Madden, Malik K.', price: '1000', stock: '85' });
    await Product.create({ name: 'Cohen, Callum B.', price: '1000', stock: '17' });
    await Product.create({ name: 'Stein, Yeo K.', price: '1000', stock: '99' });
    await Product.create({ name: 'Knight, Whitney G.', price: '1000', stock: '59' });
    await Product.create({ name: 'Hurley, Portia T.', price: '1000', stock: '79' });
    await Product.create({ name: 'Martinez, Levi I.', price: '1000', stock: '77' });
    await Product.create({ name: 'Hale, Hamish E.', price: '1000', stock: '86' });
    await Product.create({ name: 'Glover, Jonah V.', price: '1000', stock: '31' });
    await Product.create({ name: 'Gould, Cassandra W.', price: '1000', stock: '82' });
    await Product.create({ name: 'Hoover, Justine N.', price: '1000', stock: '22' });
    await Product.create({ name: 'Ford, Marshall T.', price: '1000', stock: '82' });
    await Product.create({ name: 'Haynes, Jermaine X.', price: '1000', stock: '87' });
    await Product.create({ name: 'Mcdowell, Tamekah W.', price: '1000', stock: '69' });
    await Product.create({ name: 'Bray, Darius V.', price: '1000', stock: '28' });
    await Product.create({ name: 'Pruitt, Tana E.', price: '1000', stock: '85' });
    await Product.create({ name: 'Barrett, Ciara L.', price: '1000', stock: '52' });
  }
}

module.exports = ProductSeeder
