import { useEffect, useCallback } from "react";
import { createTicket, deleteTicket, getTickets, patchTicket } from "../api/ticketsApi.js";
import { useAsync } from "./useAsync.js";

export function useTickets() {
    const listaAsync = useAsync();
    const { value: ticketsValue, run: runList, setValue: setTickets } = listaAsync;

    const actionAsinc = useAsync();
    const { run: runAction } = actionAsinc;

    const reload = useCallback(() => {
        return runList(() => getTickets());
    }, [runList]);

    const addTicket = useCallback(async (ticketData) => {
        const created = await runAction(() => {
            createTicket(ticketData);
            setTickets((prev) => [created, ...(Array.isArray(prev) ? prev : [])]);
            return created;
        })}, [runAction, setTickets]);

    const setStatus = useCallback(async (id, status) => {
        const updated = await runAction(() => patchTicket(id, { status }));

        setTickets((prev) => {
            if (!Array.isArray(prev)) {
                return prev;
            }

            return prev.map((t) => (t.id === id ? updated : t));
        });

        return updated;
    }, [runAction, setTickets]
    );

    const remove = useCallback(async (id) => {
        await runAction(() => deleteTicket(id));

        setTickets((prev) => {
            if (!Array.isArray(prev)) return prev;
            return prev.filter((t) => t.id !== id);
        });
    }, [runAction, setTickets]
    );

    useEffect(() => {
        reload();
    }, [reload]);

    const tickets = Array.isArray(ticketsValue) ? ticketsValue : [];

    return {
        tickets,
        loading: listaAsync.loading || actionAsinc.loading,
        error: listaAsync.error || actionAsinc.error,
        reload,
        addTicket,
        setStatus,
        remove
    }

}
