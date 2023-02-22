
const math=require("../index")
describe("testing math utilities", () => {
 
  let pos_vals;
  let neg_vals;
  let vals;
  let sum_of_vals=-4;
  let values;
 
  beforeAll(function(){
    vals=[1,-1,-4 ,4,-4];
    values=vals;
   pos_vals=[1,4];
   neg_vals=[-3,-4];
    });
    beforeEach(()=>{
      
      console.log(values);
    })
 afterEach(function()
  {
    console.log("done");
  })
  afterAll(()=>{
    console.log(vals);
  })


  it("sum function should equal to sum of the values", () => {

  expect(math.sum(vals)).toEqual(sum_of_vals)
values=pos_vals;
  });

  it("positive function should equal to positive values", () => {
    expect(math.positive(vals)).toEqual(pos_vals);
values=neg_vals;

  });
  it("negative function should not equal to positive values", () => {
    expect(math.positive(vals)).not.toBe(neg_vals);
    vals=0;
  });
});





