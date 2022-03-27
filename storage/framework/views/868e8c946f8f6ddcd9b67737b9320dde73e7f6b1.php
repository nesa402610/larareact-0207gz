<!doctype html>
<html lang="ru">
    <?php echo $__env->make('defaults.head', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<body>
    <hedear>
        <?php echo $__env->make('defaults.navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </hedear>
    <?php echo $__env->yieldContent('main-section'); ?>
</body>
</html>
<?php /**PATH /home/unkkptqt/domains/react.zulema.p-host.in/resources/views/layout.blade.php ENDPATH**/ ?>