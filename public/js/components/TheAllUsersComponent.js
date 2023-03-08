// imports always go here
import UserComponent from './TheUserComponent.js';

export default {
    name: 'TheAllUsersComponent',

    template: `
    <section>
        <h2>Who's Using Roku?</h2>

        <user v-for="user in users" :user="user"></user>
    </section>
    `,

    created() {
        console.log('all users is ready');
        fetch('/ums/users')
            .then(res => res.json())
            .then(data => {
                console.table(data);
                // push the users into the vm's data object
                this.users = data;
            })
        .catch(error => console.error(error));
    },

    data() {
        return {
            users: []
        }
    },

    components: {
        user: UserComponent
    }
}