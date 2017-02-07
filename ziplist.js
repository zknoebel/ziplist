/**
 * Created by zac on 2/6/17.
 */

function zipList(l1, l2) {
  const l3 = [];
  for (let i = 0; i < l1.length; i++) {
    l3.push(l1[i]);
    l3.push(l2[i]);
  }
  return l3;
}

function zipListTheSimpleWay(l1, l2) {
  return _.flatten(_.zip(l1, l2));
}

l1 = ['1', '2', '3'];
l2 = ['1', '2', '3'];
l3 = ['a', 'd', 's'];
l4 = ['a', 'd', 's'];
console.log(zipList(l1, l3));
console.log(zipListTheSimpleWay(l2, l4));
