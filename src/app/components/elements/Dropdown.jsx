import React from 'react';
import { browserHistory } from 'react-router';
import Icon from 'app/components/elements/Icon';
import { findParent } from 'app/utils/DomUtils';

export default class Dropdown extends React.Component {
    static propTypes = {
<<<<<<< HEAD
        selected: React.PropTypes.string,
=======
>>>>>>> remove rfc from vote component
        children: React.PropTypes.object,
        className: React.PropTypes.string,
        title: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.object,
<<<<<<< HEAD
        ]),
        href: React.PropTypes.string,
        onHide: React.PropTypes.func.isRequired,
        show: React.PropTypes.bool,
    };

=======
        ]).isRequired,
        href: React.PropTypes.string,
        onHide: React.PropTypes.func,
        onShow: React.PropTypes.func,
        show: React.PropTypes.bool,
    };

    static defaultProps = {
        onHide: () => null,
        onShow: () => null,
        show: false,
        className: 'dropdown-comp',
        href: null,
    };

>>>>>>> remove rfc from vote component
    constructor(props) {
        super(props);
        this.state = {
            shown: false,
<<<<<<< HEAD
            selected: props.selected,
        };
    }

=======
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.show !== this.state.shown) {
            this.setState({ shown: nextProps.show });
        }
    }

>>>>>>> remove rfc from vote component
    componentWillUnmount() {
        document.removeEventListener('click', this.hide);
    }

    toggle = e => {
        const { shown } = this.state;
        if (shown) {
            this.hide(e);
        } else this.show(e);
    };

    show = e => {
        e.preventDefault();
        this.setState({ shown: true });
<<<<<<< HEAD
=======
        this.props.onShow();
>>>>>>> remove rfc from vote component
        document.addEventListener('click', this.hide);
    };

    hide = e => {
        // Do not hide the dropdown if there was a click within it.
        const inside_dropdown = !!findParent(e.target, 'dropdown__content');
        if (inside_dropdown) return;
        e.preventDefault();
        this.setState({ shown: false });
        this.props.onHide();
        document.removeEventListener('click', this.hide);
    };

    render() {
        const { children, className, title, href, position } = this.props;

        let entry = (
            <a key="entry" href={href || '#'} onClick={this.toggle}>
                {title}
            </a>
        );

        const content = (
            <div key="dropdown-content" className={'dropdown__content'}>
                {children}
            </div>
        );
        const cls =
            'dropdown' +
            (this.state.shown ? ' show' : '') +
            (className ? ` ${className}` : '') +
            (position ? ` ${position}` : '');
        return React.createElement('div', { className: cls, key: 'dropdown' }, [
            entry,
            content,
        ]);
    }
}
