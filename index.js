function SuperAlias(fn) {
  this.fn = fn;
}

SuperAlias.prototype.apply = function apply(compiler) {
  var fn = this.fn;

  compiler.resolvers.normal.apply({
    apply: function applyResolver(resolver) {
      resolver.plugin('resolve', function resolve(context, request) {
        request.path = fn(request.path); // eslint-disable-line
      });
    }
  });
};

module.exports = SuperAlias;
