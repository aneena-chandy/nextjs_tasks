function CardChildren({children}){
    return(
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        margin: "10px"
      }}
    >
      {children}
    </div>
    );
}

export default CardChildren;