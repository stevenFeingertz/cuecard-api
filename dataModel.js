// This file holds my ideas for the potential data model

Account
    - Account Type
        Free
        Paid (yearly)
            Single
            Teams
        OwnerID
    - Payment Profile
        Payments? (can this be pulled via api and not kept in db?)
    - Contacts
        1 is the acct owner
        Name
        Email
        Password
        Phone (SMS)
    - Stacks
        Start Date/Time ??
        Shared {id's of users}
        Name
        Theme {school, modern, education, etc.}
        - Cue Card
            Social Posts when played
            Location (with maps)
            Reminders
                n number
                    Who?
                    How?
            Start Time/Trigger
            Duration
            Running/Paused
            Content
                Text Blocks
                Social Posts
                Files
                Links
                Feedback
                Real-Time Comms (socket.io)
    - Tags
