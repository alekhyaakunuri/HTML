function Employee(id,fullname,lastname){
    this.id=id;
    this.fullname=firstname;
    this.lastname=lastname;
    this.getFullname=function(){
        return this.firstname+" "+this.lastname;
    }
}
var emp1=Employee(1001,"ram","k");
var emp2=Employee(1002,"alli","N");