${
    using Typewriter.Extensions.Types;

    string KnockoutInitializer(Property property)
    {
        var type = property.Type;
        
        return type.IsEnumerable ?
            $"KnockoutObservableArray<{type.Name.TrimEnd('[', ']')}> = ko.observableArray<{type.Name.TrimEnd('[', ']')}>({type.Default()})" :
            $"KnockoutObservable<{type.Name}> = ko.observable<{type.Name}>({type.Default()})";
    }

    string TypeMap(Property property)
    {
        var type = property.Type;

        if (type.IsPrimitive)
        {
            return type.IsDate ?
                $"new Date(data.{property.name})" :
                $"data.{property.name}";
        }
        else
        {
            return type.IsEnumerable ?
                $"data.{property.name}.map(i => new {type.Name.TrimEnd('[', ']')}(i))" :
                $"new {type.Name}(data.{property.name})";
        }
    }
}
module App { $Classes(*Model)[

    export class $Name { 
    $Properties[
        public $name: $KnockoutInitializer;]

        constructor(data: any = null) {

            if (data !== null) {$Properties[
                this.$name($TypeMap);]
            }
        }
    }]
}