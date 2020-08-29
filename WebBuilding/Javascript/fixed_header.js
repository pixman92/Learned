// code to make a header 

//grid1 - sets up a divded section of the header
.grid1{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

//header class for making the header
.header{
  position: fixed;
  top: 0;
  width: 100%;
  background: #555;
  color: #f1f1f1;
  font-size: 3em;

}

// the indivual cell alignment details
.cell{
    display: flex;
    justify-content: center;
    align-items: center;

}
