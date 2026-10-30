import Decimal from 'decimal.js';
export function simpleInterest(capital:string,annualRate:string,years:string){
 const c=new Decimal(capital),r=new Decimal(annualRate),t=new Decimal(years);
 if(c.lte(0)||r.lt(0)||t.lt(0))throw new Error('Parâmetros financeiros inválidos');
 const interest=c.mul(r).div(100).mul(t);
 return {grossInterest:interest.toFixed(2,Decimal.ROUND_HALF_UP),grossMaturity:c.plus(interest).toFixed(2,Decimal.ROUND_HALF_UP)};
}
