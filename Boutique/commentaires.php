<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Commentaires</title>
    <style>
       .Commentaires .box-container{
           display: flex;
           flex-wrap: wrap;
           gap:1.5rem;
        }

        .Commentaires .box-container .box{
           flex:1 1 30rem;
           box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.1);
           border-radius: .5rem;
           padding:3rem 2rem;
           position: relative;
           border:.1rem solid rgba(0,0,0,.1);
        }

        .Commentaires .box-container .box .fa-quote-right{
           position: absolute;
           bottom:3rem; right:3rem;
           font-size: 6rem;
           color:var(--blanche);
        }

        .Commentaires .box-container .box .stars i{
           color:var(--brown);
           font-size: 2rem;
        }

        .Commentaires .box-container .box p{
           color:var(--gris);
           font-size: 1.5rem;
           line-height: 1.5;
           padding-top: 2rem;
        }

        .Commentaires .box-container .box .user{
           display: flex;
           align-items: center;
           padding-top: 2rem;
        }

        .Commentaires .box-container .box .user img{
           height:6rem;
           width:6rem;
           border-radius: 50%;
           object-fit: cover;
           margin-right: 1rem;
        }

        .Commentaires .box-container .box .user h3{
           font-size: 2rem;
           color:#333;
        }

        .Commentaires .box-container .box .user span{
           font-size: 1.5rem;
           color:#999;
        }
    </style>
</head>
<body>
    
</body>
</html>