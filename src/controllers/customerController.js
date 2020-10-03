const controller ={}

controller.list=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('select * from customer',(err,rows)=>{
            if(err){
                res.json(err);
                
            }
            else{
                console.log(rows)
                res.render('customer',{
                    data:rows
                });
            }
        });
    });
};

controller.save=(req,res)=>{
    const data= req.body;
    console.log(data);
    req.getConnection((err,conn)=>{
        conn.query('insert into customer set ?',[data], (err,rows)=>{
            console.log(rows);
            res.redirect('/');
        })
    })
};

controller.edit=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('select * from customer where id=?',[req.params.id], (err,rows)=>{
            console.log(rows),
            res.render('customer_edit',{
                data:rows[0]
            });
        })
    })
};

controller.actualizar=(req,res)=>{
    const {id}=req.params;
    const newCustomer = req.body;

    req.getConnection((err,conn)=>{
        conn.query('update customer set ? where id=?',[newCustomer,id], (err,rows)=>{
            res.redirect('/');
        })
    })
};

controller.delete=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('delete from customer where id=?',[req.params.id], (err,rows)=>{
            res.redirect('/');
        })
    })
};
module.exports = controller;