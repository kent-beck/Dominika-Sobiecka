import {Mug, Ear, Liquid, Shine, Foam, FoamWhite} from './Beer.styled';

const Beer = () => {
    return (
        <Mug>
            <Ear/>
            <Liquid/>
            <Shine/>
            <Foam>
                <FoamWhite/>
                <FoamWhite/>
                <FoamWhite/>
                <FoamWhite/>
                <FoamWhite/>
                <FoamWhite/>
            </Foam>
        </Mug>
    )
};

export default Beer;
