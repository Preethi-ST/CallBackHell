let num = 10;
display=(n,cb)=>{
    console.log("in display fun: "+ n);
    setTimeout(function(){
        if(!isNaN(n)){
            console.log(n);
            cb(null,n);
        }
        else{
            cb("invalid data","Timer Not Working");
        }
    },1000);
}
let $counter = document.getElementById('counter');
display(num,function(err,data){
    if(err!== null){
        $counter.innerText = `error: ${data}`;
    }
    else{
        if(data === 0){
            $counter.style.color = '#F95700FF';
            $counter.style.backgroundColor = '#FFFFFFFF';
            $counter.innerText = "Happy Independence Day!!!"
        }
        else{
            $counter.innerText = data;
            data--;
            display(data,function(err,data){
                if(err!== null){
                    $counter.innerText = `error: ${data}`;
                }
                else{
                    if(data === 0){
                        $counter.style.color = '#F95700FF';
                        $counter.style.backgroundColor = '#FFFFFFFF';
                        $counter.innerText = "Happy Independence Day!!!"
                    }
                    else{
                        $counter.innerText = data;
                        data--;
                        display(data,function(err,data){
                            if(err!== null){
                                $counter.innerText = `error: ${data}`;
                            }
                            else{
                                if(data === 0){
                                    $counter.style.color = '#F95700FF';
                                    $counter.style.backgroundColor = '#FFFFFFFF';
                                    $counter.innerText = "Happy Independence Day!!!"
                                }
                                else{
                                    $counter.innerText = data;
                                    data--;
                                    display(data,function(err,data){
                                        if(err!== null){
                                            $counter.innerText = `error: ${data}`;
                                        }
                                        else{
                                            if(data === 0){
                                                $counter.style.color = '#F95700FF';
                                                $counter.style.backgroundColor = '#FFFFFFFF';
                                                $counter.innerText = "Happy Independence Day!!!"
                                            }
                                            else{
                                                $counter.innerText = data;
                                                data--;
                                                display(data,function(err,data){
                                                    if(err!== null){
                                                        $counter.innerText = `error: ${data}`;
                                                    }
                                                    else{
                                                        if(data === 0){
                                                            $counter.style.color = '#F95700FF';
                                                            $counter.style.backgroundColor = '#FFFFFFFF';
                                                            $counter.innerText = "Happy Independence Day!!!"
                                                        }
                                                        else{
                                                            $counter.innerText = data;
                                                            data--;
                                                            display(data,function(err,data){
                                                                if(err!== null){
                                                                    $counter.innerText = `error: ${data}`;
                                                                }
                                                                else{
                                                                    if(data === 0){
                                                                        $counter.style.color = '#F95700FF';
                                                                        $counter.style.backgroundColor = '#FFFFFFFF';
                                                                        $counter.innerText = "Happy Independence Day!!!"
                                                                    }
                                                                    else{
                                                                        $counter.innerText = data;
                                                                        data--;
                                                                        display(data,function(err,data){
                                                                            if(err!== null){
                                                                                $counter.innerText = `error: ${data}`;
                                                                            }
                                                                            else{
                                                                                if(data === 0){
                                                                                    $counter.style.color = '#F95700FF';
                                                                                    $counter.style.backgroundColor = '#FFFFFFFF';
                                                                                    $counter.innerText = "Happy Independence Day!!!"
                                                                                }
                                                                                else{
                                                                                    $counter.innerText = data;
                                                                                    data--;
                                                                                    display(data,function(err,data){
                                                                                        if(err!== null){
                                                                                            $counter.innerText = `error: ${data}`;
                                                                                        }
                                                                                        else{
                                                                                            if(data === 0){
                                                                                                $counter.style.color = '#F95700FF';
                                                                                                $counter.style.backgroundColor = '#FFFFFFFF';
                                                                                                $counter.innerText = "Happy Independence Day!!!"
                                                                                            }
                                                                                            else{
                                                                                                $counter.innerText = data;
                                                                                                data--;
                                                                                                display(data,function(err,data){
                                                                                                    if(err!== null){
                                                                                                        $counter.innerText = `error: ${data}`;
                                                                                                    }
                                                                                                    else{
                                                                                                        if(data === 0){
                                                                                                            $counter.style.color = '#F95700FF';
                                                                                                            $counter.style.backgroundColor = '#FFFFFFFF';
                                                                                                            $counter.innerText = "Happy Independence Day!!!"
                                                                                                        }
                                                                                                        else{
                                                                                                            $counter.innerText = data;
                                                                                                            data--;
                                                                                                            display(data,function(err,data){
                                                                                                                if(err!== null){
                                                                                                                    $counter.innerText = `error: ${data}`;
                                                                                                                }
                                                                                                                else{
                                                                                                                    if(data === 0){
                                                                                                                        $counter.style.color = '#F95700FF';
                                                                                                                        $counter.style.backgroundColor = '#FFFFFFFF';
                                                                                                                        $counter.innerText = "Happy Independence Day!!!"
                                                                                                                    }
                                                                                                                    else{
                                                                                                                        $counter.innerText = data;
                                                                                                                        data--;
                                                                                                                        display(data,function(err,data){
                                                                                                                            if(err!== null){
                                                                                                                                $counter.innerText = `error: ${data}`;
                                                                                                                            }
                                                                                                                            else{
                                                                                                                                if(data === 0){
                                                                                                                                   $counter.style.color = '#F95700FF';
                                                                                                                                   $counter.style.backgroundColor = '#FFFFFFFF';
                                                                                                                                   $counter.innerText = "Happy Independence Day!!!"
                                                                                                                                }
                                                                                                                                else{
                                                                                                                                    $counter.innerText = data;
                                                                                                                                    data--;
                                                                                                                                }
                                                                                                                            }
                                                                                                                        })
                                                                                                                    }
                                                                                                                }
                                                                                                            })
                                                                                                        }
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                        }
                                                                                    })
                                                                                }
                                                                            }
                                                                        })
                                                                    }
                                                                }
                                                            })
                                                        }
                                                    }
                                                })
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
            })
        }
    }
})