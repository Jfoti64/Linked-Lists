!function(){"use strict";var t=class{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.value=t,this.next=null}};const e=new class{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.head=t}getListHead(){return this.head}setListHead(t){this.head=t}getLastListItem(){if(null==this.head)return null;let t=this.head;for(;t.next;)t=t.next;return t}append(e){const n=new t(e);null===this.head?this.head=n:this.getLastListItem().next=n}prepend(e){const n=new t(e);if(null===this.head)this.head=n;else{const t=this.head;n.next=t,this.head=n}}size(){let t=0,e=this.head;for(;null!=e;)t+=1,e=e.next;return t}atIndex(t){if(t<0||null===this.head||null===t)throw new Error("Invalid index");let e=this.head;for(let n=0;n<t;n+=1)if(e=e.next,null===e)throw new Error("Invalid index");return e}pop(){const t=this.size();0!==t&&(1===t?this.head=null:this.atIndex(t-2).next=null)}contains(t){let e=this.head;for(;null!=e;){if(e.value===t)return!0;e=e.next}return!1}find(t){let e=this.head,n=0;for(;null!=e;){if(e.value===t)return n;e=e.next,n+=1}return null}toString(){if(!this.head)return"null";let t="",e=this.head;for(;e;)t+=`( ${e.value} ) -> `,e=e.next;return t+="null",t}}(new t(2));e.append(3),e.append(4),e.append(5),e.prepend(1)}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dG9kby1saXN0Ly4vc3JjL25vZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saW5rZWRMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IG51bGwpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIiwiaW1wb3J0IExpbmtlZExpc3QgZnJvbSAnLi9saW5rZWRMaXN0JztcbmltcG9ydCBOb2RlIGZyb20gJy4vbm9kZSc7XG5cbmNvbnN0IG5vZGUxID0gbmV3IE5vZGUoMik7XG5jb25zdCBsaXN0ID0gbmV3IExpbmtlZExpc3Qobm9kZTEpO1xuXG5saXN0LmFwcGVuZCgzKTtcbmxpc3QuYXBwZW5kKDQpO1xubGlzdC5hcHBlbmQoNSk7XG5saXN0LnByZXBlbmQoMSk7XG4iLCJpbXBvcnQgTm9kZSBmcm9tICcuL25vZGUnO1xuXG5jbGFzcyBMaW5rZWRMaXN0IHtcbiAgY29uc3RydWN0b3IoaGVhZCA9IG51bGwpIHtcbiAgICB0aGlzLmhlYWQgPSBoZWFkO1xuICB9XG5cbiAgZ2V0TGlzdEhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVhZDtcbiAgfVxuXG4gIHNldExpc3RIZWFkKG5ld0hlYWQpIHtcbiAgICB0aGlzLmhlYWQgPSBuZXdIZWFkO1xuICB9XG5cbiAgZ2V0TGFzdExpc3RJdGVtKCkge1xuICAgIGlmICh0aGlzLmhlYWQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBjdXJyZW50SXRlbSA9IHRoaXMuaGVhZDtcbiAgICB3aGlsZSAoY3VycmVudEl0ZW0ubmV4dCkge1xuICAgICAgY3VycmVudEl0ZW0gPSBjdXJyZW50SXRlbS5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudEl0ZW07XG4gIH1cblxuICBhcHBlbmQodmFsdWUpIHtcbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgIC8vIElmIHRoZSBsaXN0IGlzIGVtcHR5LCBzZXQgdGhlIG5ldyBub2RlIGFzIHRoZSBoZWFkIG9mIHRoZSBsaXN0XG4gICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgbGlzdCBpcyBub3QgZW1wdHksIGZpbmQgdGhlIGxhc3QgaXRlbSBhbmQgYXBwZW5kIHRoZSBuZXcgbm9kZVxuICAgICAgY29uc3QgbGFzdEl0ZW0gPSB0aGlzLmdldExhc3RMaXN0SXRlbSgpO1xuICAgICAgbGFzdEl0ZW0ubmV4dCA9IG5ld05vZGU7XG4gICAgfVxuICB9XG5cbiAgcHJlcGVuZCh2YWx1ZSkge1xuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgLy8gSWYgdGhlIGxpc3QgaXMgZW1wdHksIHNldCB0aGUgbmV3IG5vZGUgYXMgdGhlIGhlYWQgb2YgdGhlIGxpc3RcbiAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBsaXN0IGlzIG5vdCBlbXB0eSwgZmluZCB0aGUgZmlyc3QgaXRlbSBhbmQgcHJlcGVuZCB0aGUgbmV3IG5vZGVcbiAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IHRoaXMuaGVhZDtcbiAgICAgIG5ld05vZGUubmV4dCA9IGZpcnN0SXRlbTtcbiAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgfVxuICB9XG5cbiAgc2l6ZSgpIHtcbiAgICBsZXQgc2l6ZSA9IDA7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChjdXJyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICBzaXplICs9IDE7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBzaXplO1xuICB9XG5cbiAgYXRJbmRleChpbmRleCkge1xuICAgIGlmIChpbmRleCA8IDAgfHwgdGhpcy5oZWFkID09PSBudWxsIHx8IGluZGV4ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaW5kZXgnKTtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmhlYWQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4OyBpICs9IDEpIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dDtcbiAgICAgIGlmIChjdXJyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaW5kZXgnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICB9XG5cbiAgcG9wKCkge1xuICAgIGNvbnN0IGxpc3RMZW5ndGggPSB0aGlzLnNpemUoKTtcbiAgICBpZiAobGlzdExlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gSGFuZGxlIGNhc2Ugd2hlbiB0aGUgbGlzdCBpcyBhbHJlYWR5IGVtcHR5XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsaXN0TGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyBIYW5kbGUgY2FzZSB3aGVuIHRoZSBsaXN0IGhhcyBvbmx5IG9uZSBlbGVtZW50XG4gICAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBHZW5lcmFsIGNhc2UgZm9yIG1vcmUgdGhhbiBvbmUgZWxlbWVudFxuICAgICAgY29uc3Qgc2Vjb25kTGFzdE5vZGUgPSB0aGlzLmF0SW5kZXgobGlzdExlbmd0aCAtIDIpO1xuICAgICAgc2Vjb25kTGFzdE5vZGUubmV4dCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY29udGFpbnModmFsdWUpIHtcbiAgICBsZXQgY3VycmVudEl0ZW0gPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKGN1cnJlbnRJdGVtICE9IG51bGwpIHtcbiAgICAgIGlmIChjdXJyZW50SXRlbS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjdXJyZW50SXRlbSA9IGN1cnJlbnRJdGVtLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZpbmQodmFsdWUpIHtcbiAgICBsZXQgY3VycmVudEl0ZW0gPSB0aGlzLmhlYWQ7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB3aGlsZSAoY3VycmVudEl0ZW0gIT0gbnVsbCkge1xuICAgICAgaWYgKGN1cnJlbnRJdGVtLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgICBjdXJyZW50SXRlbSA9IGN1cnJlbnRJdGVtLm5leHQ7XG4gICAgICBpbmRleCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGlmICghdGhpcy5oZWFkKSB7XG4gICAgICByZXR1cm4gJ251bGwnO1xuICAgIH1cbiAgICBsZXQgc3RyaW5nTGlzdCA9ICcnO1xuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMuaGVhZDtcbiAgICB3aGlsZSAoY3VycmVudE5vZGUpIHtcbiAgICAgIHN0cmluZ0xpc3QgKz0gYCggJHtjdXJyZW50Tm9kZS52YWx1ZX0gKSAtPiBgO1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICAgIH1cbiAgICBzdHJpbmdMaXN0ICs9ICdudWxsJztcbiAgICByZXR1cm4gc3RyaW5nTGlzdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rZWRMaXN0O1xuIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidmFsdWUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ0aGlzIiwibmV4dCIsImxpc3QiLCJoZWFkIiwiZ2V0TGlzdEhlYWQiLCJzZXRMaXN0SGVhZCIsIm5ld0hlYWQiLCJnZXRMYXN0TGlzdEl0ZW0iLCJjdXJyZW50SXRlbSIsImFwcGVuZCIsIm5ld05vZGUiLCJOb2RlIiwicHJlcGVuZCIsImZpcnN0SXRlbSIsInNpemUiLCJjdXJyZW50Tm9kZSIsImF0SW5kZXgiLCJpbmRleCIsIkVycm9yIiwiaSIsInBvcCIsImxpc3RMZW5ndGgiLCJjb250YWlucyIsImZpbmQiLCJ0b1N0cmluZyIsInN0cmluZ0xpc3QiXSwic291cmNlUm9vdCI6IiJ9