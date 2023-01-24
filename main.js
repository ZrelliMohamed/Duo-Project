var Base = [
     {
        src:"https://images.immediate.co.uk/production/volatile/sites/4/2021/05/handmade-22db10a.jpg?quality=90&webp=true&resize=210,338",
        Price : 17.99,
        Author : 'Anna Ploszajski',
        Type : "Scientific",
        description:"Scientists tend to think about materials in terms of quantities like their melting point, their density and how much pressure they can withstand. But humanity's earliest materials scientists didn't work in a lab measuring how much stress an object could withstand: they worked with their hands and made things.Anna Ploszajski, herself a materials scientist, goes back to these ancient roots to explore in a hands-on way. She learns from the trial-and-error wisdom of generations of experts in clay, sugar, steel, glass, paper and more."
     },
     {
        src:"https://images.immediate.co.uk/production/volatile/sites/4/2021/05/handmade-22db10a.jpg?quality=90&webp=true&resize=210,338",
        Price : 17.99,
        Author : 'Anna Ploszajski',
        Type : "Scientific",
        description:"Scientists tend to think about materials in terms of quantities like their melting point, their density and how much pressure they can withstand. But humanity's earliest materials scientists didn't work in a lab measuring how much stress an object could withstand: they worked with their hands and made things.Anna Ploszajski, herself a materials scientist, goes back to these ancient roots to explore in a hands-on way. She learns from the trial-and-error wisdom of generations of experts in clay, sugar, steel, glass, paper and more."
     },
     {
        src:"https://images.immediate.co.uk/production/volatile/sites/4/2021/05/handmade-22db10a.jpg?quality=90&webp=true&resize=210,338",
        Price : 17.99,
        Author : 'Anna Ploszajski',
        Type : "Scientific",
        description:"Scientists tend to think about materials in terms of quantities like their melting point, their density and how much pressure they can withstand. But humanity's earliest materials scientists didn't work in a lab measuring how much stress an object could withstand: they worked with their hands and made things.Anna Ploszajski, herself a materials scientist, goes back to these ancient roots to explore in a hands-on way. She learns from the trial-and-error wisdom of generations of experts in clay, sugar, steel, glass, paper and more."
     }, 
      {
        src:"https://images.immediate.co.uk/production/volatile/sites/4/2021/05/handmade-22db10a.jpg?quality=90&webp=true&resize=210,338",
        Price : 17.99,
        Author : 'Anna Ploszajski',
        Type : "Scientific",
        description:"Scientists tend to think about materials in terms of quantities like their melting point, their density and how much pressure they can withstand. But humanity's earliest materials scientists didn't work in a lab measuring how much stress an object could withstand: they worked with their hands and made things.Anna Ploszajski, herself a materials scientist, goes back to these ancient roots to explore in a hands-on way. She learns from the trial-and-error wisdom of generations of experts in clay, sugar, steel, glass, paper and more."
     }
]
// this code display ourr data  in our desgin of cards in the container
var str=""
for (var i = 0; i < Base.length; i++) {
    str ="<div class='grid-product'><div><table id='cards-info'><td class='td-first'><img src='"+Base[i].src+"' class='img-product'/></td><td><div class='td-last'> Price : "+Base[i].Price+" DT</div><div class='td-last'> Athor : "+Base[i].Author+"</div><div class='td-last'> Type : "+Base[i].Type+"</div></td></table></div><div class='Description'>"+Base[i].description.slice(0,270)+"etc.</div><center><input type='button' value='BUY' class='btn-buy' ></center> </div>"
    $("#Container").append(str)
}