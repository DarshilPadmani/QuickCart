import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

export const syncUserCreation = inngest.createFunction(
    {
        id: 'sync-user-from-clerk'
    },
    {
        event: 'clerk/user.created'
    },
    async((event)=>{
        const { id, first_name, last_name, email_addresses, image_url} = event.data
        const userData = {
            _id: id,
            
        }
    })
)