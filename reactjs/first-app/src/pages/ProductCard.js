export function ProductCard({name,price,images})
{
    return(<>
<ul>
    <li>Name:{name}</li>
    <li>Price:{price}</li>
    <li>
    <img
    src={require(`../assets/imgs/bags/${images}`)}
HEIGHT={300}/>
    </li>
</ul>


    </>)
}