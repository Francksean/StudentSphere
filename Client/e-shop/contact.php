<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>contact</title>
    <style>
        .contact .row{
           display: flex;
           flex-wrap: wrap-reverse;
           gap:1.5rem;
           align-items: center;
        }

        .Contact .row form{
           flex:1 1 40rem;
           padding:2rem 2.5rem;
           box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.1);
           border:.1rem solid rgba(0,0,0,.1);
           background: var(--blanche);
           border-radius: .5rem;
        }

        .Contact .row .image{
           flex:1 1 40rem;
        }

        .Contact .row .image img{
           width: 100%;
        }

        .Contact .row form .box{
           padding:1rem;
           font-size: 1.7rem;
           color:var(--gris);
           text-transform: none;
           border:.1rem solid rgba(0,0,0,.1);
           border-radius: .5rem;
           margin:.7rem 0;
           width: 100%;
        }

        .Contact .row form .box:focus{
           border-color: var(--brown);
        }

        .Contact .row form textarea{
           height: 15rem;
           resize: none;
        }
    </style>
</head>
<body>
    
</body>
</html>