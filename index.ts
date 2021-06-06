class Sun{
    private static instance : Sun;
    private constructor() {}
    public static getInstance(): Sun{
        if (!Sun.instance){
            Sun.instance= new Sun();
        }
        return Sun.instance;
    }
    public ToShine(){
        console.log('The Sun is shining')
    }

}

const first_sun = Sun.getInstance();
first_sun.ToShine();
const second_sun = Sun.getInstance();
if (first_sun===second_sun){
    console.log('There is only one Sun in our solar system');
} else{
    console.log('something has gone wrong, check the singleton-pattern-logic');
}