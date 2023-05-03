
class ProductService
{
   static productList= [
    {
        sno :'AB123',
        image :'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=600',
        name : 'MI Watch',
        price : 1500,
        qty : 21
    },
    {
        sno :'AB101',
        image :'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name : 'Opp Watch',
        price : 5660,
        qty : 8
    },
    {
        sno :'AB102',
        image :'https://images.pexels.com/photos/266666/pexels-photo-266666.jpeg?auto=compress&cs=tinysrgb&w=600',
        name : 'Smart Watch',
        price : 67000,
        qty : 0
    },
    {
        sno :'AB04',
        image :'https://images.pexels.com/photos/1120275/pexels-photo-1120275.jpeg?auto=compress&cs=tinysrgb&w=600',
        name : 'RedMi Watch',
        price : 2500,
        qty : 2
    },
    {
        sno :'AB104',
        image :'https://images.pexels.com/photos/47856/rolex-wrist-watch-clock-gmt-47856.jpeg?auto=compress&cs=tinysrgb&w=600',
        name : 'Lenovo Watch',
        price : 67700,
        qty : 15
    }
  ];


   static getAllProducts()
    {
        return this.productList;
    }

}
export default ProductService