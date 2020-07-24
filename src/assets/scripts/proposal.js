$(function() {
    //add fields of items
    $("#addItem").on("click", function() {
        let item = `<input class="form-control col-md-12" 
                    type="text"  
                    name="proposal_details_items"  
                    id="proposal_details_items"  
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
                <input class="form-control" type="text" name="amount">
              </td>
              <td>
                <input class="form-control" type="text" name="length">
              </td>
              <td>
                <input class="form-control" type="text" name="width">
              </td>
              <td>
                <input class="form-control" type="text" name="height">
              </td>
              <td colspan="2">
                <select class="form-control" name="color">
                    <option value="azul">Azul</option>
                    <option value="amarelo">Amarelo</option>
                    <option value="verde">Verde</option>
                    <option value="vermelho">Vermelho</option>
                    <option value="prata">Prata</option>
                </select>
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

    //events on filters of proposal
    $("#filter").on('change', function() {      
        let valueFilter = parseInt($(this).val());
        if(valueFilter == 1) {
          var placeholder = 'Digite o Nome do Cliente';           
        }
        if(valueFilter == 2) {
          var placeholder = 'Digite o CNPJ do Cliente'; 
        }

        $("#value").attr('placeholder', placeholder);  
    }); 

}); 