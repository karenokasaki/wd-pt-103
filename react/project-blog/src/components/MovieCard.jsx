export default function Filme(props) {
   let styleObj = {};

   if (props.filme.rating >= 9) {
      styleObj.backgroundColor = "#DFF4EA";
   }

   return (
      <div className="post" style={styleObj}>
         <h1>{props.filme.title}</h1>
         <p>{props.filme.sinopse}</p>
         <p>{props.filme.rating}</p>

         {/* mostra se for true */}
         {props.filme.release && (
            <div>
               <p>Assista agora por streaming</p>
               <button>Watch now</button>
            </div>
         )}

         {/* mostra se for false  */}
         {!props.filme.release && (
            <div>
               <p>Apenas no cinema</p>
               <p>Compre a pré estréia!!!</p>
            </div>
         )}
      </div>
   );
}
