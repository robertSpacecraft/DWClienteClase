const BASE_URL = "http://localhost:3001/";

async function request(path, options){
    const response = await fetch(`${BASE_URL}${path}, options`);

    let data = null;

    try {
        data = await response.json();
    } catch (err){

    }

    if (!response.ok){
        const msg = data?.message || `HTTP ${response.status} - Error en ${path}`;
        throw new error(msn);
    }

    return data;
}

export function getTickets(){
    return request("tickets");
}

export function createTicket(ticket){
    return request("tickets", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(ticket),
    });
}

export function patchTicket(id, patch){
    return request(`tickets/${id}`, {
        method: "PATCH",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(patch), 
    });
}

export function deleteTicket(id){
    return request(`tickets/${id}`, {
        method: "DELETE",
    });
}