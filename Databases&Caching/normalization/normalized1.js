// Normalized Data

const state = {
    users: {
        byIds: {
            1: {
                id: 1,
                name: "Alice",
              },
            2: { 
                id: 2, 
                name: "Bob", 
            }
        },
        allIds: [1, 2]
    },
    posts: {
        byIds: {
            101: { id: 101, title: "Post 1", userId: 1 },
            102: { id: 102, title: "Post 2", userId: 1 },
            103: { id: 103, title: "Post 3", userId: 2 }
        },
        allIds: [101, 103, 102]
    },
}

state.users.byIds['2'] // O(1)