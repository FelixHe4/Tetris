import React from 'react';
import {createStage} from '../gameHelpers';
import {StyledTetrisWrapper,StyledTetris} from './styles/StyledTetris';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {

    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <div>
                    <Stage stage={createStage()} />
                    <aside>
                        <div>
                            <Display text="Lines" />
                            <Display text="Level" />
                        </div>
                        <StartButton />
                    </aside>
                </div>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;