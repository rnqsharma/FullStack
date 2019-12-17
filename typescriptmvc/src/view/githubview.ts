import GithubController from '../controller/githubcontroller';
import GithubProfile from '../model/github';
import IGithubModel from '../model/githubmodel';

export interface IViewElements {
    search: HTMLInputElement;
    list: HTMLDivElement;
}
export default class GithubView {
    constructor(public elements: IViewElements, public model: GithubProfile, public controller: GithubController) {
    }

    public init(): void {
        this.model.observer.subscribe((newProfile: IGithubModel[]) => {
        this.render(newProfile);
        });
        this.elements.search.addEventListener
        ('blur', (e: any) => {
        const profile = e.target.value;
        this.controller.searchProfile(profile);
        });

    }
    public render = (newProfile: IGithubModel[]): void => {
        this.elements.list.innerHTML = '';
    // tslint:disable-next-line:no-unused-expression
        const list = (document.querySelector('#list') as HTMLDivElement);
        newProfile.forEach( (model: IGithubModel) => {
                list.appendChild(this.createElements('img', 'src', model.avatar_url));
            });
        }
        private createElements(element: string, attribute: string, value: string): HTMLElement {
            const elem = document.createElement(element);
            elem.setAttribute(attribute, value);
            return elem;
    }
}
