import { Aurum, Renderable } from 'aurumjs';
import aurumImg from '../images/aurum.png';

export function PageFooter(): Renderable {
    return (
        <div class="page-footer">
            <span class="powered-by">powered by</span>
            <a href="https://aurumjs.org/" target="_blank">
                <img src={aurumImg} />
            </a>
        </div>
    );
}
