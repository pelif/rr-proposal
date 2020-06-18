$(function() {
    //add fields of items
    $("#addItem").on("click", function() {
        let item = `<input class="form-control col-md-12" 
                    type="text"  
                    name="items[]"  
                    id="items[]"  
                    placeholder="Digite o Item aqui">
        <br>`; 

        $("#items-content").append(item); 
    }); 

    //remove filds of items
    $("#rmItem").on("click", function() {    
        if($("#items-content input").length > 1)  {
            $("#items-content input").last().remove(); 
            $("#items-content br").last().remove(); 
        }        
    }); 

    //append table line of products
    $("#addSombra").on("click", function() {
        let register = `
            <tr>
              <td>
                <input class="form-control" type="text" name="amount[]">
              </td>
              <td>
                <input class="form-control" type="text" name="length[]">
              </td>
              <td>
                <input class="form-control" type="text" name="width[]">
              </td>
              <td colspan="2">
                <input class="form-control" type="text" name="height[]">
              </td>
            </tr>`; 

        $("#items-list-content").append(register); 
    }); 

    //remove table line of product 
    $("#rmSombra").on("click", function() {
        if($("#items-list-content tr").length > 1) {
            $("#items-list-content tr").last().remove();
        }        
    }); 

}); 