export const NotepadApp = (state={}, action) =>{
switch (action.type) {
    case "Add_Note":
        
        return {
            ...state,
            Notes: state.Notes.concat([
                {
                    id: action.id,
                    value: action.value,
                    status: false
                }
            ])
        };
        case "NoteStatus":
            return {
                ...state,
                Notes: state.Notes.map((Note,id)=>Node.id===action.id ? {status: !Note.status}:Note)
            }

    default:
        return state;
}
}