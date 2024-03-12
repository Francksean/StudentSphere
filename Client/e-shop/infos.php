<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A propos du BDE-shop</title>
    <style>  
      .Info .row{
          display: flex;
          align-items: center;
          gap:2rem;
          flex-wrap: wrap;
          padding:2rem 0;
          padding-bottom: 3rem;
        }

        .Info .row .im{
          flex:1 1 40rem;
          position: relative;
        }

        .Info .row .im img{
           width:100%;
           border:1.5rem solid var(--blanche);
           border-radius: .5rem;
           filter: drop-shadow(2px 2px 2px black);
           height: 100%;
           object-fit: cover;
        }

        .Info .row .im h3{
           position: absolute;
           top:50%; mix-blend-mode: darken;
           font-size: 3rem;
           background:var(--blanche);
           width:100%;
           padding:1rem 2rem;
           text-align: center;
           mix-blend-mode: screen;
        }

        .Info .row .content{
           flex:1 1 40rem;
        }

        .Info .row .content h3{
           font-size: 3rem;
           color:var(--gris);
        }

        .Info .row .content p{
           font-size: 1.5rem;
           color:var(--gris);
           padding:.5rem 0;
           padding-top: 1rem;
           line-height: 1.5;
        }

    </style>
</head>
<body>
    
</body>
</html>